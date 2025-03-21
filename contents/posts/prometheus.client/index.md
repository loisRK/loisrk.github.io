---
title: "prometheus.client 종류와 동기/비동기 처리 방식"
description:
date: 2025-03-21
update: 2021-04-04
tags:
  - prometheus
  - 동기
  - 비동기
series: "all about prometheus"
---

# prometheus.client 종류, 동기/비동기

# Prometheus.client 종류

## start_http_server

별도의 HTTP 서버를 시작하여 Prometheus metrics를 특정 포트에서 노출합니다.

- **사용 환경**: 주로 WSGI 기반의 동기식 Python 애플리케이션에서 사용됩니다. `start_http_server`를 호출하면 새로운 스레드에서 독립된 HTTP 서버가 실행됩니다.
- **예시 코드**:
    
    ```python
    from prometheus_client import start_http_server, Counter
    import time
    
    # Metric 정의
    c = Counter('my_counter', 'Description of counter')
    
    # HTTP 서버 시작
    start_http_server(8000)
    
    while True:
        c.inc()  # Counter 증가
        time.sleep(1)
    ```
    
- **특징**:
    - 별도의 서버에서 metrics를 노출하기 때문에 애플리케이션 코드와 분리된 방식으로 동작.
    - 동기식 환경에 적합.

## make_asgi_app

ASGI 애플리케이션을 생성하여, Prometheus metrics를 노출할 수 있는 ASGI 기반의 앱을 제공합니다.

- **사용 환경**: 주로 FastAPI, Starlette, Django Channels와 같은 비동기 ASGI 기반 애플리케이션에서 사용됩니다.
- **예시 코드**:
    
    ```python
    from prometheus_client import make_asgi_app
    from fastapi import FastAPI
    from starlette.middleware import Middleware
    
    # Prometheus metrics 앱 생성
    metrics_app = make_asgi_app()
    
    # FastAPI 애플리케이션 생성
    app = FastAPI()
    
    # 라우팅 설정
    app.mount("/metrics", metrics_app)
    ```
    
- **특징**:
    - ASGI 애플리케이션과 직접 통합되므로, 비동기 환경에서 metrics를 효율적으로 노출 가능.
    - 애플리케이션 내의 특정 경로에 metrics를 통합하는 방식으로 동작.

## Summary

- `start_http_server`는 동기식 환경에서 독립된 HTTP 서버를 시작하여 metrics를 노출하고, `make_asgi_app`는 비동기 환경에서 ASGI 애플리케이션으로 통합하여 metrics를 노출합니다.
- 사용 환경에 따라 적절한 방식을 선택해야 한다.

# 동기식 환경과 비동기식 환경

## 동기식 환경

### 정의

- **동기식**이란 작업이 순차적으로 진행되는 방식을 의미합니다. 하나의 작업이 완료된 후에야 다음 작업이 시작됩니다.

### 특징

- **직렬 처리**: 코드가 위에서 아래로 순서대로 실행됩니다. 한 줄의 코드가 끝나기 전에는 다음 줄의 코드가 실행되지 않습니다.
- **I/O 작업에서의 대기**: 만약 코드에서 파일을 읽거나 네트워크 요청을 보내는 등 시간이 오래 걸리는 작업이 있다면, 프로그램은 그 작업이 완료될 때까지 기다립니다. 이 대기 시간 동안 다른 작업은 진행되지 않습니다.
- **간단한 구현**: 동기식 프로그래밍은 이해하기 쉽고, 디버깅이 상대적으로 간단합니다. 코드가 실행되는 순서대로 결과를 예측하기 쉬운 구조입니다.

### 예시

```python
import time

def read_file():
    time.sleep(2)  # 파일 읽기에 2초 걸린다고 가정
    print("File read")

def make_network_request():
    time.sleep(3)  # 네트워크 요청에 3초 걸린다고 가정
    print("Network request made")

# 순차적으로 실행
read_file()
make_network_request()
print("All tasks completed")
```

- 이 코드에서는 `read_file()` 함수가 끝나기 전에 `make_network_request()` 함수는 실행되지 않습니다. 모든 작업은 순차적으로 실행됩니다.

### 장점

- 코드가 직관적이고, 처리 순서가 명확합니다.
- 동기식 코드의 실행 순서를 따라가기가 쉽습니다.

### 단점

- **효율성 저하**: I/O 작업에서 대기 시간이 길어지면, CPU 자원을 비효율적으로 사용하게 됩니다. 대기 시간 동안 프로그램이 다른 유용한 작업을 하지 못합니다.
- **응답성 저하**: 사용자 인터페이스(UI)에서 동기식 작업을 사용할 경우, 프로그램이 멈추거나 "응답 없음" 상태가 될 수 있습니다.

## 비동기식 환경

### 정의

- **비동기식**이란 작업이 병렬로(혹은 논리적으로 동시에) 진행될 수 있는 방식을 의미합니다. 특정 작업이 완료되지 않더라도, 다른 작업이 먼저 시작될 수 있습니다.

### 특징

- **병렬 처리**: 여러 작업이 동시에 진행될 수 있습니다. 한 작업이 완료되기를 기다리지 않고 다른 작업이 실행됩니다.
- **이벤트 기반**: 비동기식 코드는 이벤트 루프를 사용하여, 작업이 완료되면 호출할 콜백 함수나 미래에 완료될 작업을 정의합니다.
- **효율적 자원 사용**: I/O 작업에서 대기하는 동안 CPU는 다른 작업을 처리할 수 있습니다. 이는 특히 네트워크 요청이나 파일 입출력처럼 시간이 오래 걸리는 작업에서 유리합니다.

### 예시

```python
import asyncio

async def read_file():
    await asyncio.sleep(2)  # 파일 읽기에 2초 걸린다고 가정
    print("File read")

async def make_network_request():
    await asyncio.sleep(3)  # 네트워크 요청에 3초 걸린다고 가정
    print("Network request made")

async def main():
    # 병렬로 실행
    await asyncio.gather(read_file(), make_network_request())
    print("All tasks completed")

# 이벤트 루프에서 실행
asyncio.run(main())
```

- 이 코드에서는 `read_file()`과 `make_network_request()`가 동시에 실행되며, 둘 다 완료되기를 기다린 후에 "All tasks completed"가 출력됩니다.

### 장점

- **효율적 자원 사용**: 비동기식 코드는 CPU 사용률을 높이고, 대기 시간 동안 다른 작업을 처리할 수 있어 전반적인 성능이 향상됩니다.
- **높은 응답성**: 특히 웹 서버나 사용자 인터페이스에서 비동기식을 사용하면, 사용자가 느끼는 응답 시간이 빨라집니다.

### 단점

- **복잡성 증가**: 비동기식 코드는 동기식 코드에 비해 이해하기 어려울 수 있습니다. 작업 간의 순서를 추적하거나 디버깅이 복잡해질 수 있습니다.
- **디버깅의 어려움**: 비동기 코드에서 발생하는 버그는 때로 디버깅하기 어려울 수 있습니다.

## Summary

- **동기식 환경**에서는 작업이 순차적으로 실행되며, 하나의 작업이 완료될 때까지 다른 작업은 시작되지 않습니다. 이는 코드가 직관적이지만, I/O 대기 시간이 길어질 경우 비효율적입니다.
- **비동기식 환경**에서는 여러 작업이 동시에 실행될 수 있으며, I/O 대기 시간을 효율적으로 활용할 수 있습니다. 그러나 비동기 코드는 이해하고 디버깅하기 더 어렵습니다.

# make_asgi_app 선택 이유

- **비동기 애플리케이션을 사용하고 있다면**: `make_asgi_app`이 더 좋은 선택입니다. FastAPI, Starlette, Django Channels 등의 비동기 프레임워크에서 Prometheus metrics를 통합하려는 경우, 비동기 방식으로 효율적인 자원 관리를 할 수 있습니다.
- **전체 애플리케이션 관리**: 애플리케이션 내의 특정 경로에 메트릭스를 통합하여, 애플리케이션 코드와 일관되게 관리하고자 할 때, `make_asgi_app`은 더 나은 통합성을 제공합니다.
- **높은 동시성 및 성능이 중요한 경우**: 비동기 환경에서 성능을 극대화하고자 한다면, `make_asgi_app`이 자원 관리 측면에서 더 효율적입니다.
// 접근방법
// 1. 시작 노드인 '1'을 스택에 삽입하고 방문 처리를 한다
// 2. 스택의 최상단 노드인 '1'에 방문하지 않은 인접 노드 '2', '3', '8'중 가장 작은 노드인 '2'를
// 스택에 넣고 방문 처리를 한다
// 3. 스택의 최상단 노드인 '2'에 방문하지 않은 인접 노드 '7'을 스택에 넣고 방문 처리를 한다
// 4. 스택의 최상단 노드인 '7'에 방문하지 않은 인접 노드 '6'과 '8'중 가장 작은 노드인 '6'을
// 스택에 넣고 방문 처리를 한다
// 5. 스택의 최상단 노드인 '6'에 방문하지 않은 인접 노드가 없으므로 스택에서 '6'번 노드를 꺼낸다
// 6. 스택의 최상단 노드인 '7'에 방문하지 않은 인접 노드 '8'을 스택에 넣고 방문 처리를 한다
// 7. 스택의 최상단 노드인 '8'에 방문하지 않은 인접 노드가 없으므로 스택에서 '8'번 노드를 꺼낸다
// 8. 스택의 최상단 노드인 '7'에 방문하지 않은 인접 노드가 없으므로 스택에서 '7'번 노드를 꺼낸다
// 9. 스택의 최상단 노드인 '2'에 방문하지 않은 인접 노드가 없으므로 스택에서 '2'번 노드를 꺼낸다
// 10. 스택의 최상단 노드인 '1'에 방문하지 않은 인접 노드 '3'을 스택에 넣고 방문 처리를 한다
// 11. 스택의 최상단 노드인 '3'에 방문하지 않은 인접 노드 '4'와 '5'중 가장 작은 노드인 '4'을
// 스택에 넣고 방문 처리를 한다
// 12. 스택의 최상단 노드인 '4'에 방문하지 않은 인접 노드 '5'을 스택에 넣고 방문 처리를 한다
// 13. 남아 있는 노드에 방문하지 않은 인접 노드가 없으므로 모든 노드를 차례대로 꺼낸다

function dfs(graph, v, visited, result) {
    // 현재 노드 방문 처리
    visited[v] = true;
    // 방문한 노드를 각각 push
    result.push(v);

    // 인접 노드 탐색
    graph[v].forEach(i => {
      // 방문하지 않았다면
        if (!visited[i]) {
        // 재귀함수인 dfs함수 호출
            dfs(graph, i, visited, result);
        }
    })
}

// 노드 연결 정보
const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
];

// 방문 정보
const visited = new Array(graph.length).fill(false);

// 삽입 노드 정보
const result = [];

// dfs함수 호출
dfs(graph, 1, visited, result);

// push된 노드 순서 출력
console.log(result.join(" "));
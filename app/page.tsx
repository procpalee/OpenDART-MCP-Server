export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui", maxWidth: "720px" }}>
      <h1>OpenDART MCP Server</h1>
      <p>
        한국 금융감독원{" "}
        <a href="https://opendart.fss.or.kr/">OpenDART API</a>를 Claude에서 바로
        사용할 수 있는 MCP 서버입니다.
      </p>

      <h2>연결 방법</h2>
      <ol>
        <li>
          <a href="https://claude.ai">claude.ai</a> &gt; Settings &gt;
          Connectors &gt; Add custom connector
        </li>
        <li>
          URL 입력: <code>https://your-project.vercel.app/api/mcp</code>
        </li>
      </ol>

      <h2>API 키 설정</h2>
      <p>
        <a href="https://opendart.fss.or.kr/">opendart.fss.or.kr</a>에서 무료로
        API 키를 발급받은 후, 커넥터 URL에 포함하세요:
      </p>
      <pre style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}>
        https://your-project.vercel.app/api/mcp?opendart_key=YOUR_API_KEY
      </pre>
      <p>
        이렇게 하면 대화에서 별도 설정 없이 바로 사용할 수 있습니다.
        키는 요청마다 따로 쓰이고 서버에 저장되지 않으므로, URL 에 넣지 않았다면
        각 도구의 <code>api_key</code> 인자로 넘겨야 합니다.
      </p>

      <h2>MCP Endpoint</h2>
      <p>
        <code>/api/mcp</code>
      </p>
    </main>
  );
}

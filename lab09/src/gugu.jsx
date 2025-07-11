function VulnerableEval({ code }) {
  // This is dangerous and should never be done in real apps
  useEffect(() => {
    eval(code);
  }, [code]);

  return <div>Executing code...</div>;
}

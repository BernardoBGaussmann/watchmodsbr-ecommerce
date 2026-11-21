# CLAUDE.md

## Instruções para Commits Git

Sempre que for solicitado fazer commits no Git, utilize **Conventional Commits em inglês**, usando exclusivamente o autor local configurado no Git, **sem nunca adicionar Co-Authored-By, rodapés ou qualquer menção a assistentes de IA**.

### Regra de Granularidade do Histórico

**Sempre maximize a granularidade do histórico utilizando commits atômicos:**
- Ao implementar qualquer tarefa, divida as alterações em múltiplos commits pequenos e focados
- Exemplos: um commit para utilitários/dados, um commit por componente criado, um commit por página/rota, um commit para estilização/ajustes
- Seguir Conventional Commits em inglês
- Sem Co-Authored-By ou rodapés automáticos
- Fazer `git push` ao final
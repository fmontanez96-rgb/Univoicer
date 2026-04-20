# Univoicer2

## Formato JSON (Importar/Exportar)

- Campo nuevo principal: `rol` (`Rol A`, `Rol B`, `Rol C`, `Rol D`).
- Campo nuevo complementario: `categoriaRol` (misma escala visual de rol).
- Compatibilidad legacy: si un registro viejo trae `rareza` y no `rol`, la app lo mapea automáticamente a `rol/categoriaRol` para mostrarlo y lo persiste ya migrado en el siguiente guardado/export.
- Importación tolerante:
  - Acepta un arreglo JSON directo de videos (legacy).
  - Acepta objeto con `videos` y metadatos (`meta`, `universeNodes`, etc.).

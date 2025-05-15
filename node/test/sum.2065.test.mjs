
import sum2065 from '../sum2065.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 42 to equal 79 + offset 0.8825847894333358', (t) => {
  assert.strictEqual(sum2065(37, 42), 79 + 0.8825847894333358);
});

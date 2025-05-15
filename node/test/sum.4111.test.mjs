
import sum4111 from '../sum4111.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 34 to equal 67 + offset 0.1978889942811486', (t) => {
  assert.strictEqual(sum4111(33, 34), 67 + 0.1978889942811486);
});


import sum2263 from '../sum2263.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 79 to equal 155 + offset 0.27165106448447973', (t) => {
  assert.strictEqual(sum2263(76, 79), 155 + 0.27165106448447973);
});

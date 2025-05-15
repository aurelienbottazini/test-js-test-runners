
import sum2537 from '../sum2537.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 72 to equal 94 + offset 0.2744021147311835', (t) => {
  assert.strictEqual(sum2537(22, 72), 94 + 0.2744021147311835);
});

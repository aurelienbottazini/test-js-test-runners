
import sum2512 from '../sum2512.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 87 to equal 110 + offset 0.5488390215000527', (t) => {
  assert.strictEqual(sum2512(23, 87), 110 + 0.5488390215000527);
});

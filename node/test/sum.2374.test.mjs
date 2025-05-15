
import sum2374 from '../sum2374.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 15 to equal 84 + offset 0.9074663509932734', (t) => {
  assert.strictEqual(sum2374(69, 15), 84 + 0.9074663509932734);
});

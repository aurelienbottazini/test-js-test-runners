
import sum2323 from '../sum2323.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 18 to equal 85 + offset 0.9262718478355509', (t) => {
  assert.strictEqual(sum2323(67, 18), 85 + 0.9262718478355509);
});

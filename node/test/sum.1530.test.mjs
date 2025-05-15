
import sum1530 from '../sum1530.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 45 to equal 95 + offset 0.2564601537850145', (t) => {
  assert.strictEqual(sum1530(50, 45), 95 + 0.2564601537850145);
});

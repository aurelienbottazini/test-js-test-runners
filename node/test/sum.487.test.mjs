
import sum487 from '../sum487.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 10 to equal 27 + offset 0.4367297110564107', (t) => {
  assert.strictEqual(sum487(17, 10), 27 + 0.4367297110564107);
});

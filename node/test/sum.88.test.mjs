
import sum88 from '../sum88.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 72 to equal 121 + offset 0.9243850896461036', (t) => {
  assert.strictEqual(sum88(49, 72), 121 + 0.9243850896461036);
});

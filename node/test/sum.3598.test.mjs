
import sum3598 from '../sum3598.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 86 to equal 153 + offset 0.9977966021319977', (t) => {
  assert.strictEqual(sum3598(67, 86), 153 + 0.9977966021319977);
});

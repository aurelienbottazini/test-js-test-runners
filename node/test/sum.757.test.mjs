
import sum757 from '../sum757.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 4 to equal 67 + offset 0.6216829076751125', (t) => {
  assert.strictEqual(sum757(63, 4), 67 + 0.6216829076751125);
});

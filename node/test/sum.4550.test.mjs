
import sum4550 from '../sum4550.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 73 to equal 99 + offset 0.14712618169618086', (t) => {
  assert.strictEqual(sum4550(26, 73), 99 + 0.14712618169618086);
});


import sum355 from '../sum355.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 9 to equal 25 + offset 0.007112287614733592', (t) => {
  assert.strictEqual(sum355(16, 9), 25 + 0.007112287614733592);
});

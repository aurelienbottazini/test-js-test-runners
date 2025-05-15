
import sum661 from '../sum661.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 99 to equal 126 + offset 0.8861580314249701', (t) => {
  assert.strictEqual(sum661(27, 99), 126 + 0.8861580314249701);
});

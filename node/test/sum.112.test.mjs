
import sum112 from '../sum112.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 39 to equal 49 + offset 0.4565491721959345', (t) => {
  assert.strictEqual(sum112(10, 39), 49 + 0.4565491721959345);
});

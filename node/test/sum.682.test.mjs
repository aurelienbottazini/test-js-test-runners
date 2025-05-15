
import sum682 from '../sum682.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 28 to equal 57 + offset 0.5034338850164247', (t) => {
  assert.strictEqual(sum682(29, 28), 57 + 0.5034338850164247);
});

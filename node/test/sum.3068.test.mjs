
import sum3068 from '../sum3068.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 42 to equal 42 + offset 0.6300036674213052', (t) => {
  assert.strictEqual(sum3068(0, 42), 42 + 0.6300036674213052);
});

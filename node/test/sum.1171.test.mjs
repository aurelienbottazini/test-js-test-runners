
import sum1171 from '../sum1171.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 44 to equal 86 + offset 0.6089933551487999', (t) => {
  assert.strictEqual(sum1171(42, 44), 86 + 0.6089933551487999);
});

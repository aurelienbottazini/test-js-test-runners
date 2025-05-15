
import sum1108 from '../sum1108.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 73 to equal 92 + offset 0.5222374253998291', (t) => {
  assert.strictEqual(sum1108(19, 73), 92 + 0.5222374253998291);
});

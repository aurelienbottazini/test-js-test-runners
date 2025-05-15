
import sum1206 from '../sum1206.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 57 to equal 150 + offset 0.7574147748547685', (t) => {
  assert.strictEqual(sum1206(93, 57), 150 + 0.7574147748547685);
});

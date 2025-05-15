
import sum1178 from '../sum1178.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 62 to equal 150 + offset 0.06932575278180542', (t) => {
  assert.strictEqual(sum1178(88, 62), 150 + 0.06932575278180542);
});

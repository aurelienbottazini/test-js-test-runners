
import sum1517 from '../sum1517.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 34 to equal 65 + offset 0.767829036872566', (t) => {
  assert.strictEqual(sum1517(31, 34), 65 + 0.767829036872566);
});

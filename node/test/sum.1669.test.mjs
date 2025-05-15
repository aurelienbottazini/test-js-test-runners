
import sum1669 from '../sum1669.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 17 to equal 47 + offset 0.8658105484420937', (t) => {
  assert.strictEqual(sum1669(30, 17), 47 + 0.8658105484420937);
});

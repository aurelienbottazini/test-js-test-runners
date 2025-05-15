
import sum1154 from '../sum1154.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 66 to equal 107 + offset 0.9955816551639471', (t) => {
  assert.strictEqual(sum1154(41, 66), 107 + 0.9955816551639471);
});

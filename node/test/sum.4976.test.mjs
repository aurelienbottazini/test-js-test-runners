
import sum4976 from '../sum4976.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 41 to equal 81 + offset 0.19147398905096769', (t) => {
  assert.strictEqual(sum4976(40, 41), 81 + 0.19147398905096769);
});

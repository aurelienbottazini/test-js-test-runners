
import sum2867 from '../sum2867.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 90 to equal 146 + offset 0.09537534488977972', (t) => {
  assert.strictEqual(sum2867(56, 90), 146 + 0.09537534488977972);
});

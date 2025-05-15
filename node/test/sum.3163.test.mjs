
import sum3163 from '../sum3163.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 8 to equal 18 + offset 0.1493425570896586', (t) => {
  assert.strictEqual(sum3163(10, 8), 18 + 0.1493425570896586);
});


import sum1497 from '../sum1497.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 47 to equal 60 + offset 0.3783054628986604', (t) => {
  assert.strictEqual(sum1497(13, 47), 60 + 0.3783054628986604);
});

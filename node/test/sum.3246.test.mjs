
import sum3246 from '../sum3246.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 70 to equal 161 + offset 0.7729019635948524', (t) => {
  assert.strictEqual(sum3246(91, 70), 161 + 0.7729019635948524);
});

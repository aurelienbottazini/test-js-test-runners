
import sum4491 from '../sum4491.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 61 to equal 102 + offset 0.43686945483352035', (t) => {
  assert.strictEqual(sum4491(41, 61), 102 + 0.43686945483352035);
});

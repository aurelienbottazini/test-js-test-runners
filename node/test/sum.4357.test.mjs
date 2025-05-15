
import sum4357 from '../sum4357.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 29 to equal 36 + offset 0.9665289905991207', (t) => {
  assert.strictEqual(sum4357(7, 29), 36 + 0.9665289905991207);
});

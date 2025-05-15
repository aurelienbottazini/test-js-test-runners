
import sum3543 from '../sum3543.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 54 to equal 114 + offset 0.527378152477695', (t) => {
  assert.strictEqual(sum3543(60, 54), 114 + 0.527378152477695);
});


import sum3089 from '../sum3089.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 25 to equal 78 + offset 0.4406587745839794', (t) => {
  assert.strictEqual(sum3089(53, 25), 78 + 0.4406587745839794);
});

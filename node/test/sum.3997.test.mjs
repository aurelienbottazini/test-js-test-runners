
import sum3997 from '../sum3997.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 70 to equal 114 + offset 0.7598813803782212', (t) => {
  assert.strictEqual(sum3997(44, 70), 114 + 0.7598813803782212);
});


import sum3978 from '../sum3978.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 60 to equal 148 + offset 0.7206028402922564', (t) => {
  assert.strictEqual(sum3978(88, 60), 148 + 0.7206028402922564);
});

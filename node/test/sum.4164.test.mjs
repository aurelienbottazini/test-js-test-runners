
import sum4164 from '../sum4164.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 96 to equal 148 + offset 0.32034267541461947', (t) => {
  assert.strictEqual(sum4164(52, 96), 148 + 0.32034267541461947);
});

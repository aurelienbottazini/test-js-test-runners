
import sum285 from '../sum285.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 14 to equal 76 + offset 0.477636336352146', (t) => {
  assert.strictEqual(sum285(62, 14), 76 + 0.477636336352146);
});

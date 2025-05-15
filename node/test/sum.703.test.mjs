
import sum703 from '../sum703.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 0 to equal 67 + offset 0.49067900493305394', (t) => {
  assert.strictEqual(sum703(67, 0), 67 + 0.49067900493305394);
});

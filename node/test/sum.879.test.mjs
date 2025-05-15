
import sum879 from '../sum879.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 27 to equal 47 + offset 0.7427571772565845', (t) => {
  assert.strictEqual(sum879(20, 27), 47 + 0.7427571772565845);
});

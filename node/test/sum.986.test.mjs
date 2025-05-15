
import sum986 from '../sum986.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 52 to equal 66 + offset 0.7983463464897887', (t) => {
  assert.strictEqual(sum986(14, 52), 66 + 0.7983463464897887);
});

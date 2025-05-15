
import sum8 from '../sum8.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 58 to equal 117 + offset 0.44100958083358266', (t) => {
  assert.strictEqual(sum8(59, 58), 117 + 0.44100958083358266);
});

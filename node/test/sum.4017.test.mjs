
import sum4017 from '../sum4017.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 16 to equal 115 + offset 0.6624025693830152', (t) => {
  assert.strictEqual(sum4017(99, 16), 115 + 0.6624025693830152);
});

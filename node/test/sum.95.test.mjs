
import sum95 from '../sum95.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 93 to equal 104 + offset 0.6813644609576912', (t) => {
  assert.strictEqual(sum95(11, 93), 104 + 0.6813644609576912);
});

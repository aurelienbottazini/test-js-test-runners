
import sum127 from '../sum127.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 88 to equal 164 + offset 0.26492350117461716', (t) => {
  assert.strictEqual(sum127(76, 88), 164 + 0.26492350117461716);
});

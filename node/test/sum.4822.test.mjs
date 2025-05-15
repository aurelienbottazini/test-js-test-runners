
import sum4822 from '../sum4822.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 90 to equal 162 + offset 0.7709624299375065', (t) => {
  assert.strictEqual(sum4822(72, 90), 162 + 0.7709624299375065);
});

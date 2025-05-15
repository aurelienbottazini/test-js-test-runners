
import sum4574 from '../sum4574.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 58 to equal 112 + offset 0.8011787921211279', (t) => {
  assert.strictEqual(sum4574(54, 58), 112 + 0.8011787921211279);
});
